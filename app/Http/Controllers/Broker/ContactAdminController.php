<?php

namespace App\Http\Controllers\Broker;

use App\Http\Controllers\Controller;
use App\Http\Requests\Broker\ContactAdminRequest;
use App\Models\ContactAdmin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ContactAdminController extends Controller
{
    public function index()
    {
        $auth = Auth::user();
        return Inertia::render('Brokers/Contact', [
            'auth' => $auth,
            'success' => session('success')
        ]);
    }

    public function contactTheAdmin(ContactAdminRequest $request)
    {
        $request->validated();
    }

    public function contactAdmin(Request $request)
    {
        ContactAdmin::create($request->validate([
            'user_id' => ['required', 'max:50'],
            'subject' => ['required'],
            'department' => ['required'],
            'message' => ['required']
        ]));

        return to_route('contact-admin')
            ->with('success', 'Your enquiry has been sent to the admin... we will reply within 12hours');
    }
}
