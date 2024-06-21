<?php

namespace App\Http\Controllers\Broker;

use App\Http\Controllers\Controller;
use App\Models\Broker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ListingController extends Controller
{
    public function index()
    {
        $auth = Auth::user();
        $broker = Broker::query()->where('user_id', Auth::id())->first();
        $isABroker = $broker ? true : false;
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
