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
}
