((global: any) => {

    const paths: { [name: string]: string } = {
        'vendor:': 'Vendor/'
    };

    const map: { [path: string]: string } = {
        'app': 'App',
        '@angular': 'vendor:@angular',
        'rxjs': 'vendor:rxjs'
    };

    const packages: { [pkg: string]: Object } = {
        // == App ==
        'app': { main: 'Main' },
        // == Angular ==
        '@angular/core': { main: 'bundles/core.umd' },
        '@angular/common': { main: 'bundles/common.umd' },
        '@angular/compiler': { main: 'bundles/compiler.umd' },
        '@angular/platform-browser': { main: 'bundles/platform-browser.umd' },
        '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd' },
        '@angular/http': { main: 'bundles/http.umd' },
        '@angular/router': { main: 'bundles/router.umd' },
        '@angular/forms': { main: 'bundles/forms.umd' },
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