/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <UIKit/UIKit.h>

#import <React/RCTEventEmitter.h>

@interface RCTLinkingManager : RCTEventEmitter

+ (BOOL)application:(nullable UIApplication *)app
            openURL:(nullable NSURL *)URL
            options:(nullable NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options;

+ (BOOL)application:(nullable UIApplication *)application
            openURL:(nullable NSURL *)URL
  sourceApplication:(nullable NSString *)sourceApplication
         annotation:(nullable id)annotation;

+ (BOOL)application:(nullable UIApplication *)application
continueUserActivity:(nullable NSUserActivity *)userActivity
  restorationHandler:(nullable void (^)(NSArray * __nullable))restorationHandler;

@end