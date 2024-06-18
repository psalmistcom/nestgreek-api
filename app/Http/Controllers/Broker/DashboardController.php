<?php

namespace App\Http\Controllers\Broker;

use App\Http\Controllers\Controller;
use App\Models\Broker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $broker = Broker::query()->where('user_id', Auth::id())->first();
        $brokerBool = $broker ? true : false;
        $auth = Auth::user();
        return Inertia::render(
            'Brokers/Dashboard',
            [
                'auth' => $auth,
                'broker' => $broker,
                'brokerBool' => $brokerBool,
                'success' => session('success')
            ]
        );
    }
}
