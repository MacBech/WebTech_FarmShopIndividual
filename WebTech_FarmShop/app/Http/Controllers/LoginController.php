<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function authenticate(Request $request): RedirectResponse
    {
    $credentials = $request->validate ([
        'email'=> ['required', 'email'],
        'password' => ['required']
    ]);

    if(Auth::attempt($credentials)){
        $request->session()->regenerate();
        return redirect()->intended('home');
    }
    return back()->withErrors([
        'email'=>'The provided email does not match our records',
    ])->onlyInput('email');
    }


}
