<?php

namespace App\Http\Middleware;

use App\Models\Broker;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class BrokerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $broker = Broker::query()->where('user_id', Auth::id())->first();
        $isABroker = $broker ? true : false;
        if ($isABroker !== true) {
            return redirect('broker/dashboard', 302);
        }
        // if ($request->input('token') !== 'my-secret-token') {
        //     return redirect('dashboard');
        // }
        return $next($request);
    }
}
