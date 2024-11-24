<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/reports', function () {
        return Inertia::render('Reports');
    })->name('reports');

    // Inventory
    Route::get('/inventories/medicines', function () {
        return Inertia::render('Inventory/Medicines');
    })->name('inventories.medicines');

    // Sales management
    Route::get('/sales', function () {
        return Inertia::render('Inventory/Medicines');
    })->name('inventories.medicines');

});

// auth routes
Route::middleware('auth')->group(function () {
    // csrf token
    Route::get('/csrf-token', function () {
        return response()->json(['csrf_token' => csrf_token()]);
    });
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
