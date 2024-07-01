<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Resources\Broker\PropertyResource;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $properties = Property::query()->limit(6)->get();

        $auth = Auth::user();
        return Inertia::render('Home', [
            'auth' => $auth,
            'properties' => PropertyResource::collection($properties)
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
        $auth = Auth::user();
        return Inertia::render('Property', ['auth' => $auth]);
    }
}
