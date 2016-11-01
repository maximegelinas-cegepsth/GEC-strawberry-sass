((global: any) => {

    const paths: { [name: string]: string } = {
        'shared:': '/Shared/App/',
        'vendor:': '/Shared/Vendor/'
    };

    const map: { [path: string]: string } = {
        'app': 'App',
        '@angular': 'vendor:@angular',
        '@angular2-material': 'vendor:@angular2-material',
        'rxjs': 'vendor:rxjs'
    };

    const packages: { [pkg: string]: Object } = {
        // == App ==
        'app': { main: 'Main' },
        'shared:Common': { main: 'Index' },
        'shared:Layout': { main: 'Index' },
        // == Angular ==
        '@angular/core': { main: 'bundles/core.umd.min' },
        '@angular/common': { main: 'bundles/common.umd.min' },
        '@angular/compiler': { main: 'bundles/compiler.umd.min' },
        '@angular/platform-browser': { main: 'bundles/platform-browser.umd.min' },
        '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.min' },
        '@angular/http': { main: 'bundles/http.umd.min' },
        '@angular/router': { main: 'bundles/router.umd.min' },
        '@angular/forms': { main: 'bundles/forms.umd.min' },
        '@angular/material': { main: 'material.umd' },
        // == RxJS ==
        'rxjs': {}
    };

    const config: SystemJSLoader.Config = {
        defaultJSExtensions: true,
        paths: paths,
        map: map,
        packages: packages
    };

    System.config(config);

})(this);