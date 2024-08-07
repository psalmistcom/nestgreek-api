<?php

use App\Http\Controllers\Broker\BrokerProfileController;
use App\Http\Controllers\Broker\ContactAdminController;
use App\Http\Controllers\Broker\DashboardController;
use App\Http\Controllers\Broker\ListingController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\ContactEnquiryController;
use App\Http\Controllers\Broker\ProfileController;
use App\Http\Middleware\BrokerMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/property/type/{type}', [HomeController::class, 'propertyType'])->name('property_type');
Route::get('/property/{id}', [HomeController::class, 'showSingleProperty'])->name('single_property');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::get('/properties', [HomeController::class, 'properties'])->name('properties');

Route::post('store-enquiry', [ContactEnquiryController::class, 'store'])->name('enquiry-store');


Route::prefix('/broker')->group(function () {
    Route::middleware(['auth'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        // Route::get('/my-listings', [ListingController::class, 'index'])->name('my-listings');
        // Route::get('/add-property', [ListingController::class, 'add'])->name('add-property');

        Route::get('/contact-admin', [ContactAdminController::class, 'index'])->name('contact-admin');
        Route::post('post-contact-admin', [ContactAdminController::class, 'contactAdmin'])->name('post-contact-admin');

        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

        Route::post('/profile', [ProfileController::class, 'broker'])->name('broker.update');
        Route::resource('broker', BrokerProfileController::class);
        Route::middleware([BrokerMiddleware::class])->group(function () {
            Route::resource('/listing', ListingController::class);
            Route::get('/listing/add-image/{listing}', [ListingController::class, 'add_image'])->name('listing.add-image');
            Route::post('/checking', [ListingController::class, 'checking'])->name('listing.checking');
        });
    });
});
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::group(function () {
//     Route::get('/dashboard', [HomeController::class, 'index'])
//         ->name('dashboard');
// });
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard', ['canLogin' => Route::has('login'), 'canRegister' => Route::has('register')]);
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
