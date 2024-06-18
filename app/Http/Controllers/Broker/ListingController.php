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
        $isABroker = true;
        return Inertia::render('Brokers/Listing/Index', [
            'auth' => $auth,
            'isABroker' => $isABroker
        ]);
    }
    public function create()
    {
        $auth = Auth::user();
        return Inertia::render('Brokers/Listing/Create', [
            'auth' => $auth,
            // 'success' => session('success')
        ]);
    }

    public function store()
    {
    }
}
