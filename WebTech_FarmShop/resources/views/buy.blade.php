@extends('ViewTemplate')



@section('script')
    <script defer src="{{asset('js/cookieManager.js')}}"></script>

@endsection



@section('title')
    <title>Basket</title>
@endsection


@section('header')
@endsection


@section('main')
    <div>
        <h1>Buy Local Organic Products</h1>

        <div class="buy-main">

            @foreach($data as $item)
                @include("components.product-card", ['productTitle'=>ucfirst(str_replace('_',' ',$item->name)),'src' => asset('images/' . $item->pictures->fileName . $item->pictures->fileExtension), 'productInput' => $item->name . '-input', 'productDescription' => $item->description,'product'=>$item])
            @endforeach


        </div>
    </div>

@endsection
