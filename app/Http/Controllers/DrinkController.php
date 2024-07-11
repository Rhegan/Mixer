<?php

namespace App\Http\Controllers;

use App\Models\Drink;
use App\Http\Requests\StoreDrinkRequest;
use App\Http\Requests\UpdateDrinkRequest;
use Hamcrest\Core\IsEqual;
use Http;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DrinkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // all of the drinks for specific letter
        // $response = Http::post('www.thecocktaildb.com/api/json/v1/1/search.php?f=a' . $request->search);

        return Inertia::render('Welcome', ['logo' => Storage::url('/images/logo.png')]);
    }
    
    public function searchLetter(Request $request)
    {
        $response = Http::post('www.thecocktaildb.com/api/json/v1/1/search.php?f=' . $request->value);
        \Log::info("Letter: ", [$response]);
        return $response;
    }
    
    public function searchName(Request $request)
    {     
        $response = Http::post('www.thecocktaildb.com/api/json/v1/1/search.php?s=' . $request->value);   
        \Log::info("Name: ", [$response]);
        return $response;
    }
}
