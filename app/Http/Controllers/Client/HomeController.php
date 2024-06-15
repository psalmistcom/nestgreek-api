<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $auth = Auth::user();
        return Inertia::render('Home', ['auth' => $auth]);

        // return Inertia::render('Welcome', [
        //     'features' => FeatureResource::collection($features),
        //     'canLogin' => Route::has('login'),
        //     'canRegister' => Route::has('register'),
        // ]);
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
