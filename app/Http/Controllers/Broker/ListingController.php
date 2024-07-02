<?php

namespace App\Http\Controllers\Broker;

use App\Http\Controllers\Controller;
use App\Http\Requests\Broker\ListingRequest;
use App\Http\Requests\broker\UpdatePropertyRequest;
use App\Http\Resources\Broker\PropertyResource;
use App\Models\Broker;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ListingController extends Controller
{

    public function index()
    {
        // $property = PropertyResource::collection(Property::paginate());

        $auth = Auth::user();
        $broker = Broker::query()->where('user_id', Auth::id())->first();

        // $property = Property::query()->where('broker_id', $broker->id)->paginate(10);
        $propQuery = Property::query()
            ->where('broker_id', $broker->id)
            ->orderBy('id', 'desc')
            ->paginate(10);
        $property = PropertyResource::collection($propQuery);
        $published = Property::query()
            ->where('isPublished', 1)
            ->where('broker_id', $broker->id)
            ->count();
        $unPublished = Property::query()
            ->where('isPublished', 0)
            ->where('broker_id', $broker->id)
            ->count();
        $isABroker = $broker ? true : false;
        return Inertia::render('Brokers/Listing/Index', [
            'auth' => $auth,
            'isABroker' => $isABroker,
            'properties' => $property,
            'published' => $published,
            'unPublished' => $unPublished,
            'success' => session('success')
        ]);
    }
    public function create()
    {
        $auth = Auth::user();
        $broker = Broker::query()->where('user_id', Auth::id())->first();
        return Inertia::render('Brokers/Listing/Create', [
            'auth' => $auth,
            'broker' => $broker,
            // 'success' => session('success')
        ]);
    }


    public function store(ListingRequest $request)
    {

        try {
            $data = $request->validated();
            $upload_img = $data['upload_img'] ?? null;

            if ($upload_img) {
                $data['upload_img'] = $upload_img->store('property/' . Str::random(), 'public');
            }
            // dd($data['upload_img']);
            $property  = Property::create([
                'broker_id' => $data['broker_id'],
                'title' => $data['title'],
                'address' => $data['address'],
                'listing_type' => $data['listing_type'],
                'state' => $data['state'],
                'description' => $data['description'],
                'isPublished' => $data['isPublished'],
                'upload_img' => $data['upload_img']
            ]);
            $property->characteristic()->create([
                'property_id' => $property->id,
                'price' => $data['price'],
                'bedrooms' => $data['bedrooms'],
                'bathrooms' => $data['bathrooms'],
                'sqft' => $data['sqft'],
                'property_status' => $data['property_status'],
                'property_type' => $data['property_type']
            ]);
            $property->hasImages()->create([
                'property_id' => $property->id,
                'upload_img' => $data['upload_img']
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }

        return to_route('listing.index')
            ->with('success', 'Property Added successfully');
    }

    public function add_image()
    {
    }

    public function show(Property $property)
    {
    }

    public function edit(string $id)
    {
        $property = Property::find($id);
        $auth = Auth::user();
        return inertia('Brokers/Listing/Edit', [
            'auth' => $auth,
            'property' => new PropertyResource($property),
        ]);
    }


    public function update(UpdatePropertyRequest $request, string $id)
    {
        $data = $request->validated();
        $property = Property::find($id);

        $upload_img = $data['upload_img'] ?? null;
        if ($upload_img) {
            if ($property->upload_img) {
                Storage::disk('public')->deleteDirectory(dirname($property->upload_img));
            }
            $data['upload_img'] = $upload_img->store('property/' . Str::random(), 'public');
        }
        if (isset($data['upload_img']) != null) {
            $result = $property->update(
                [
                    'title' => $data['title'],
                    'address' => $data['address'],
                    'listing_type' => $data['listing_type'],
                    'state' => $data['state'],
                    'description' => $data['description'],
                    'isPublished' => $data['isPublished'],
                    'upload_img' => $data['upload_img']
                ]
            );
        } else {
            $result = $property->update(
                [
                    'title' => $data['title'],
                    'address' => $data['address'],
                    'listing_type' => $data['listing_type'],
                    'state' => $data['state'],
                    'description' => $data['description'],
                    'isPublished' => $data['isPublished'],
                    // 'upload_img' => $data['upload_img'] ?? null,
                    // 'upload_img' => isset($data['upload_img']) ? $data['upload_img'] : $upload_img,                
                ]
            );
            # code...
        }
        if ($result) {
            $property->characteristic->where('property_id', $property->id)
                ->update(
                    [
                        'price' => $data['price'],
                        'bedrooms' => $data['bedrooms'],
                        'bathrooms' => $data['bathrooms'],
                        'sqft' => $data['sqft'],
                        'property_status' => $data['property_status'],
                        'property_type' => $data['property_type'],
                    ]
                );
            $property->hasImages->where('property_id', $property->id)->update(['upload_img' => $data['upload_img']]);

            return to_route('listing.index')
                ->with('success', "Property was updated");
        }

        return to_route('listing.index')
            ->with('success', "Property was not updated");
        // $property = Property::find($request);
    }

    /**
     * Remove the specified resource from storage.
     */

    public function destroy(string $id)
    {
        // DB::table('property_characteristics')->where('property_id', $property->id)->delete();
        // DB::table('property_images')->where('property_id', $property->id)->delete();
        $property = Property::find($id);

        $characterics = $property->characteristic()->delete();
        if ($characterics) {
            $property->hasImages()->delete();
            $property->delete();
            if ($property->upload_img) {
                Storage::disk('public')->deleteDirectory(dirname($property->upload_img));
            }
            return to_route('listing.index')->with('success', "Property deleted Succesfully!");
        }

        return to_route('listing.index')->with('success', "Property not deleted!");
    }
}
