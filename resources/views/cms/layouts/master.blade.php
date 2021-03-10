<!DOCTYPE html>
<html lang="en">
    <head>
        @include('cms.includes.head')
    </head>
<body>
    <div id="mainapp">
        @include('cms.includes.header')
    
        @section('main-content')
    
        @show
    
        @include('cms.includes.footer')
    </div>

    <script src="{{ asset('cms/js/cms.js') }}" defer></script>
</body>
</html>