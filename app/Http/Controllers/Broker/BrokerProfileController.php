<?php

namespace App\Http\Controllers\Broker;

use App\Enums\UserTypeEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\Broker\BrokerRequest;
use App\Http\Requests\Broker\updateBrokerRequest;
use App\Http\Resources\Broker\BrokerResource;
use App\Models\Broker;
use App\Models\User;
use Closure;
use ErrorException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class BrokerProfileController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware(function (Request $request, Closure $next) {
    //         if (checkUserType(['Client'], $request->user()->user_type)) return $next($request);
    //     })->only(['store']);
    // }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $auth = Auth::user();
        return Inertia("Brokers/Profile/Create", [
            'auth' => $auth,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BrokerRequest $request)
    {
        $data = $request->validated();
        // $user = UserTypeEnum::BROKER->value;

        $image = $data['image'] ?? null;

        if ($image) {
            $data['image_path'] = $image->store('broker/' . Str::random(), 'public');
        }

        $broker = Broker::create($data);

        // Update User Model         
        DB::table('users')->where('id', $broker->user_id)->update(['user_type' => UserTypeEnum::BROKER->value]);

        return to_route('dashboard')
            ->with('success', 'Profile updated successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Broker $broker)
    {
        $auth = Auth::user();
        return inertia('Brokers/Profile/Edit', [
            'auth' => $auth,
            'success' => session('success'),
            'broker' => new BrokerResource($broker)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(updateBrokerRequest $request, Broker $broker)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        if ($image) {
            if ($broker->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($broker->image_path));
            }
            $data['image_path'] = $image->store('broker/' . Str::random(), 'public');
        }
        $broker->update($data);

        return to_route('dashboard')
            ->with('success', "Profile was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
