<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function index()
    {
        return view('site.pages.home');
    }   

    public function about()
    {
        return view('site.pages.about');
    }

    public function contact()
    {
        return view('site.pages.contact');
    }
}
