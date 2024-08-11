<?php

use App\Http\Controllers\ChartController;
use App\Http\Controllers\ChartV2Controller;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DashboardV2Controller;
use App\Http\Controllers\MetricController;
use App\Http\Controllers\ParameterV2Controller;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TrafoController;
use App\Http\Controllers\TrafoV2Controller;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::prefix('v2')->group(function () {
    Route::get('/dashboard', [DashboardV2Controller::class, 'index'])
        ->name('v2.dashboard');

    Route::prefix('trafo')->group(function () {
        Route::get('/create', [TrafoV2Controller::class, 'create'])
            ->name('v2.trafo.create');
        Route::post('/', [TrafoV2Controller::class, 'store'])
            ->name('v2.trafo.store');
        Route::get('/{id}', [TrafoV2Controller::class, 'show'])
            ->name('v2.trafo.show');

        Route::prefix('{id}')->group(function () {
            Route::get('/temperature', [ParameterV2Controller::class, 'showTemperature'])
                ->name('v2.trafo.temperature');
            Route::get('/pressure', [ParameterV2Controller::class, 'showPressure'])
                ->name('v2.trafo.pressure');
            Route::get('/voltage', [ParameterV2Controller::class, 'showVoltage'])
                ->name('v2.trafo.voltage');
            Route::get('/current', [ParameterV2Controller::class, 'showCurrent'])
                ->name('v2.trafo.current');
        });
    });

    Route::prefix('chart')->group(function () {
        Route::get('/{trafoId}', [ChartV2Controller::class, 'getChartData'])
            ->name('v2.chart.data');
    });
});

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->name('dashboard');

Route::prefix('trafo')->group(function () {
    Route::get('/create', [TrafoController::class, 'create'])
        ->name('trafo.create');
    Route::post('/', [TrafoController::class, 'store'])
        ->name('trafo.store');
  Route::get('/{id}', [TrafoController::class, 'showWithDates'])
      ->name('trafo.show');
});

Route::prefix('metric')->group(function () {
    Route::get('/{trafoid}/{date}', [MetricController::class, 'getMetrics'])
        ->name('metric.metrics');
    Route::get('/{trafoid}/{date}/vif', [MetricController::class, 'getMetricVIF'])
        ->name('metric.vif');
});

Route::prefix('chart')->group(function () {
   Route::get('/{trafoid}/{date}', [ChartController::class, 'getChartData'])
       ->name('chart.data');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
