package com.jaxee;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import com.cmcewen.blurview.BlurViewPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

//import io.invertase.firebase.database.RNFirebaseLinksPackage;
//import io.invertase.firebase.database.RNFirebaseStoragePackage;
//import io.invertase.firebase.database.RNFirebaseRemoteConfigPackage;
//import io.invertase.firebase.database.RNFirebaseCrashPackage;
//import io.invertase.firebase.database.RNFirebaseAuthPackage;
//import io.invertase.firebase.database.RNFirebaseAnalyticsPackage;
import io.invertase.firebase.database.RNFirebaseDatabasePackage;
//import io.invertase.firebase.database.RNFirebaseMessagingPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
              new RNFirebasePackage(),
              new BlurViewPackage(),
              new VectorIconsPackage(),
              new MapsPackage(),
              new RNFirebaseDatabasePackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
