<?php

namespace App\Http\Controllers\Broker;

use App\Http\Controllers\Controller;
use App\Http\Requests\Broker\BrokerRequest;
use App\Http\Requests\Broker\ProfileUpdateRequest;
use App\Http\Resources\Broker\BrokerResource;
use App\Models\Broker;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {

        $query = Broker::query()->where('user_id', Auth::id())->get();
        // $query = Broker::all();
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'broker' => BrokerResource::collection($query)
            // 'broker' => $query
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }
    public function broker(BrokerRequest $request, Broker $broker): RedirectResponse
    {

        $broker->update($request->validate([
            "name" => ['required', 'max:255'],
            "address" => ['required'],
            "state" => ['required'],
            "zip_code" => ['required'],
            "phone_number" => ['required'],
            "logo_path" => ['nullable'],
            'user_id' => ['required', 'exists:users,id'],
        ]));

        return to_route('contact-admin')
            ->with('done',);
    }
    // public function broker(BrokerRequest $request, Broker $broker): RedirectResponse
    // {
    //     $data = $request->validated();

    //     /** @var $image \Illuminate\Http\UploadedFile */
    //     $image = $data['logo_path'] ?? null;
    //     if ($image) {
    //         if ($broker->image_path) {
    //             Storage::disk('public')->deleteDirectory(dirname($broker->image_path));
    //         }
    //         $data['image_path'] = $image->store('broker/' . Str::random(), 'public');
    //     }

    //     $broker->update($data);

    //     return to_route('profile.edit')->with('status', 'done');

    //     // $request->user()->fill($request->validated());

    //     // if ($request->user()->isDirty('email')) {
    //     //     $request->user()->email_verified_at = null;
    //     // }

    //     // $request->user()->save();

    //     // return Redirect::route('profile.edit');
    // }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
