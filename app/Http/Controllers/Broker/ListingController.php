<?php

namespace App\Http\Controllers\Broker;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ListingController extends Controller
{
    public function index()
    {
        $auth = Auth::user();
        return Inertia::render('Brokers/Listings', [
            'auth' => $auth,
            // 'success' => session('success')
        ]);
    }
    public function add()
    {
        $auth = Auth::user();
        return Inertia::render('Brokers/Add', [
            'auth' => $auth,
            // 'success' => session('success')
        ]);
    }
}
