<?php

namespace App\Http\Controllers\Broker;

use App\Http\Controllers\Controller;
use App\Http\Requests\Broker\ContactAdminRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $auth = Auth::user();
        return Inertia::render('Brokers/Dashboard', ['auth' => $auth]);
    }
    public function contact()
    {
        $auth = Auth::user();
        return Inertia::render('Brokers/Contact', ['auth' => $auth]);
    }

    public function contactAdmin(ContactAdminRequest $request)
    {
        $data = $request->validated();
    }
}
