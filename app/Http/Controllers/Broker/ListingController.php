<?php

namespace App\Http\Controllers\Broker;

use App\Http\Controllers\Controller;
use App\Http\Requests\Broker\ListingRequest;
use App\Http\Resources\Broker\PropertyResource;
use App\Models\Broker;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $isABroker = $broker ? true : false;
        return Inertia::render('Brokers/Listing/Index', [
            'auth' => $auth,
            'isABroker' => $isABroker,
            'properties' => $property,
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
            $property  = Property::create([
                'broker_id' => $data['broker_id'],
                'title' => $data['title'],
                'address' => $data['address'],
                'listing_type' => $data['listing_type'],
                'state' => $data['state'],
                'description' => $data['description'],
                'isPublished' => $data['isPublished']
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
            $property->hasImage()->create([
                'property_id' => $property->id,
                'upload_img' => $data['upload_img']

            ]);
        } catch (\Throwable $th) {
            throw $th;
        }

        return to_route('listing.index')
            ->with('success', 'Property Added successfully');
    }

    public function show(Property $property)
    {
    }

    public function edit(Property $property)
    {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property)
    {
        //
    }
}
