<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>{{ config('app.name', 'Laravel') }}</title>

<!-- Bootstrap Core CSS -->
<link href="{{ asset('/site/vendor/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">

<!-- Fonts -->
<link rel="dns-prefetch" href="//fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
<!-- Styles -->
<link href="{{ asset('/site/css/clean-blog.min.css') }}" rel="stylesheet">