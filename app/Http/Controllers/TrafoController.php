<?php

namespace App\Http\Controllers;

use App\Models\Trafo;
use App\Models\Voltage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TrafoController extends Controller
{
    public function showWithDates($id) {
        $trafo = Trafo::find($id);
        $dates = Voltage::selectRaw('DATE(created_at) as date')
            ->where('trafo_id', $id)
            ->groupBy(DB::raw('DATE(created_at)'))
            ->get();

        return Inertia::render('Trafo/DetailV1', [
            'trafo' => $trafo,
            'dates' => $dates,
        ]);
    }

    public function create() {
        return Inertia::render('TrafoCreate/TrafoCreateV1');
    }

    public function store() {
        $data = request()->validate([
            'name' => 'required',
            'address' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
        ]);

        Trafo::create($data);

        return redirect()->route('dashboard');
    }
}
