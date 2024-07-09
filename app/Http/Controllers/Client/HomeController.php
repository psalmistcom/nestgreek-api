<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Resources\Broker\CharacteristicsResource;
use App\Http\Resources\Broker\PropertyResource;
use App\Models\Property;
use App\Models\PropertyCharacteristics;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $properties = Property::query()->where('isPublished', 1)->limit(6)->get();
        // $characs = PropertyCharacteristics::all();
        $auth = Auth::user();
        return Inertia::render('Home', [
            'auth' => $auth,
            'properties' => PropertyResource::collection($properties),
            // 'characs' => CharacteristicsResource::collection($characs)
        ]);
    }

    public function about()
    {
        $auth = Auth::user();
        return Inertia::render('About', ['auth' => $auth]);
    }


    public function contact()
    {
        $auth = Auth::user();
        return Inertia::render('Contact', [
            'auth' => $auth,
            'success' => session('success')
        ]);
    }

    public function properties()
    {
        $properties = Property::query()->where('isPublished', 1)->paginate(10);
        $auth = Auth::user();
        return Inertia::render(
            'Property',
            [
                'auth' => $auth,
                'properties' => PropertyResource::collection($properties)
            ]
        );
    }

    public function showSingleProperty(string $id)
    {
        $property = Property::find($id);
        $auth = Auth::user();
        return inertia('SingleProperties', [
            'auth' => $auth,
            'property' => new PropertyResource($property),
        ]);
    }
    public function propertyType(string $type)
    {

        $property = DB::table('property')->where('listing_type', $type);
        dd($property);

        // $auth = Auth::user();
        // return inertia('SingleProperties', [
        //     'auth' => $auth,
        //     'property' => new PropertyResource($property),
        // ]);
    }
}
