<!DOCTYPE html>
<html lang="en">
    <head>
       @include('site.includes.head')
    </head>
<body>

    <div id="mainapp">
        @include('site.includes.header')
    
        @section('main-content')
    
        @show
    
        @include('site.includes.footer')
    </div>

    <!-- jQuery -->
    <script src="{{ asset('site/vendor/jquery/jquery.min.js') }}"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="{{ asset('site/vendor/bootstrap/js/bootstrap.min.js') }}"></script>

    <!-- Contact Form JavaScript -->
    <script src="{{ asset('site/js/jqBootstrapValidation.js') }}"></script>
    
    <script src="{{ asset('site/js/clean-blog.min.js') }}"></script>
    <script src="{{ asset('site/js/site.js') }}" defer></script>

</body>
</html>