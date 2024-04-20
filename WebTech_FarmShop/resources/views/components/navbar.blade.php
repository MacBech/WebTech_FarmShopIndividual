<div class="navbar">
    <a href="{{ route('home') }}">
        <img class="logo" src="{{ asset('images/FarmShop-logos_white.png') }}" alt="logo">
    <nav class="bar">
        <ul class="nav_links">
            <li><a href="{{ route('home') }}">Hjem</a></li>
            <li><a href="{{ route('buy') }}">Køb 🥩</a></li>
            <li><a href="{{ route('basket') }}">KURV</a></li>

            @guest <!-- Show the "Login" link only when the user is a guest (not logged in) -->
            <li><a href="{{ route('login') }}">Login</a></li>
            @else <!-- Show the "Logout" link only when the user is authenticated (logged in) -->
            <li><a href="{{ route('userpage', ['id' => Auth::user()->id]) }}">Bruger</a></li>
            <li><a href="{{ route('logOut') }}">Logout</a></li>
            @if(Auth::user()->isAdmin)
                <li><a href="/admin">Admin</a></li>
            @endif
            @endguest
        </ul>
    </nav>
</div>
