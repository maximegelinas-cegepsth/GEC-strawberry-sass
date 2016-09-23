((global: any) => {

    const paths: { [name: string]: string } = {
        'vendor:': '/Vendor/'
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
        '/Shared/Layout': { main: 'Index' },
        // == Angular ==
        '@angular/core': { main: 'bundles/core.umd.min' },
        '@angular/common': { main: 'bundles/common.umd.min' },
        '@angular/compiler': { main: 'bundles/compiler.umd.min' },
        '@angular/platform-browser': { main: 'bundles/platform-browser.umd.min' },
        '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.min' },
        '@angular/http': { main: 'bundles/http.umd.min' },
        '@angular/router': { main: 'bundles/router.umd.min' },
        '@angular/forms': { main: 'bundles/forms.umd.min' },
        // == Angular Material ==
        '@angular2-material/button': { main: 'button.umd' },
        '@angular2-material/card': { main: 'card.umd' },
        '@angular2-material/core': { main: 'core.umd' },
        '@angular2-material/icon': { main: 'icon.umd' },
        '@angular2-material/list': { main: 'list.umd' },
        '@angular2-material/sidenav': { main: 'sidenav.umd' },
        '@angular2-material/toolbar': { main: 'toolbar.umd' },
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