import { Dimensions, Platform } from "react-native";
import { Fonts } from "../../Fonts";

const deviceHeight = Dimensions.get( "window" ).height;
const deviceWidth = Dimensions.get( "window" ).width;
const platform = Platform.OS;
const platformStyle = "material";
const isIphoneX =
	platform === "ios" && deviceHeight === 812 && deviceWidth === 375;

export default {
	"platformStyle": "material",
	"platform": "ios",
	"androidRipple": true,
	"androidRippleColor": "rgba(256, 256, 256, 0.3)",
	"androidRippleColorDark": "rgba(0, 0, 0, 0.15)",
	"btnUppercaseAndroidText": false,
	"badgeBg": "#ED1727",
	"badgeColor": "#fff",
	"badgePadding": 3,
	"btnFontFamily": Fonts.Button,
	"btnDisabledBg": "#b5b5b5",
	"buttonPadding": 6,
	"btnPrimaryBg": "rgba(0,88,147,1)",
	"btnPrimaryColor": "#fff",
	"btnInfoBg": "rgba(71,186,223,1)",
	"btnInfoColor": "#fff",
	"btnSuccessBg": "rgba(0,188,78,1)",
	"btnSuccessColor": "#fff",
	"btnDangerBg": "rgba(237,23,39,1)",
	"btnDangerColor": "#fff",
	"btnWarningBg": "rgba(255,176,0,1)",
	"btnWarningColor": "#fff",
	"btnTextSize": 16.5,
	"btnTextSizeLarge": 22.5,
	"btnTextSizeSmall": 12,
	"borderRadiusLarge": 57,
	"iconSizeLarge": 45,
	"iconSizeSmall": 18,
	"cardDefaultBg": "#fff",
	"cardBorderColor": "#ccc",
	"CheckboxRadius": 0,
	"CheckboxBorderWidth": 2,
	"CheckboxPaddingLeft": 4,
	"CheckboxPaddingBottom": 0,
	"CheckboxIconSize": 18,
	"CheckboxFontSize": 14,
	"DefaultFontSize": 15,
	"checkboxBgColor": "#039BE5",
	"checkboxSize": 20,
	"checkboxTickColor": "#fff",
	"brandPrimary": "rgba(71,186,223,1)",
	"brandInfo": "#3F57D3",
	"brandSuccess": "#5cb85c",
	"brandDanger": "#d9534f",
	"brandWarning": "#f0ad4e",
	"brandDark": "rgba(0,21,40,1)",
	"brandLight": "#f4f4f4",
	"fontFamily": Fonts.Primary,
	"fontSizeBase": 15,
	"fontSizeH1": 25,
	"fontSizeH2": 22,
	"fontSizeH3": 19,
	"footerHeight": 55,
	"footerDefaultBg": "rgba(0,88,147,1)",
	"footerPaddingBottom": 0,
	"tabBarTextColor": "#fff",
	"tabBarTextSize": 14,
	"activeTab": "#fff",
	"sTabBarActiveTextColor": "rgba(71,186,223,1)",
	"tabBarActiveTextColor": "#fff",
	"tabActiveBgColor": "rgba(2,80,138,1)",
	"toolbarBtnColor": "#fff",
	"toolbarDefaultBg": "rgba(0,88,147,1)",
	"toolbarHeight": 64,
	"toolbarSearchIconSize": 20,
	"toolbarInputColor": "#fff",
	"searchBarHeight": 30,
	"searchBarInputHeight": 30,
	"toolbarBtnTextColor": "#fff",
	"toolbarDefaultBorder": "rgba(21,118,185,1)",
	"iosStatusbar": "light-content",
	"statusBarColor": "rgba(2,80,138,1)",
	"darkenHeader": "#F0F0F0",
	"iconFamily": "MaterialCommunityIcons",
	"iconFontSize": 30,
	"iconHeaderSize": 29,
	"inputFontSize": 17,
	"inputBorderColor": "#D9D5DC",
	"inputSuccessBorderColor": "rgba(0,188,78,1)",
	"inputErrorBorderColor": "rgba(208,2,27,1)",
	"inputHeightBase": 50,
	"inputColor": "#000",
	"inputColorPlaceholder": "#575757",
	"btnLineHeight": 19,
	"lineHeightH1": 30,
	"lineHeightH2": 25,
	"lineHeightH3": 20,
	"lineHeight": 20,
	"listBg": "rgba(255,255,255,1)",
	"listBorderColor": "rgba(201,201,201,1)",
	"listDividerBg": "rgba(153,209,253,1)",
	"listBtnUnderlayColor": "#DDD",
	"listItemPadding": 10,
	"listNoteColor": "#808080",
	"listNoteSize": 13,
	"defaultProgressColor": "#E4202D",
	"inverseProgressColor": "#1A191B",
	"radioBtnSize": 25,
	"radioSelectedColorAndroid": "rgba(71,186,223,1)",
	"radioBtnLineHeight": 29,
	"segmentBackgroundColor": "rgba(0,88,147,1)",
	"segmentActiveBackgroundColor": "#fff",
	"segmentTextColor": "#fff",
	"segmentActiveTextColor": "rgba(71,186,223,1)",
	"segmentBorderColor": "#fff",
	"segmentBorderColorMain": "#3F51B5",
	"defaultSpinnerColor": "rgba(2,80,138,1)",
	"inverseSpinnerColor": "#1A191B",
	"tabDefaultBg": "rgba(0,88,147,1)",
	"topTabBarTextColor": "#b3c7f9",
	"topTabBarActiveTextColor": "#fff",
	"topTabBarBorderColor": "#fff",
	"topTabBarActiveBorderColor": "#fff",
	"tabBgColor": "#F8F8F8",
	"tabFontSize": 15,
	"textColor": "#000",
	"inverseTextColor": "#fff",
	"noteFontSize": 14,
	"defaultTextColor": "#000",
	"titleFontfamily": Fonts.Primary,
	"titleFontSize": 19,
	"subTitleFontSize": 14,
	"subtitleColor": "#FFF",
	"titleFontColor": "#FFF",
	"borderRadiusBase": 2,
	"borderWidth": 1,
	"contentPadding": 10,
	"dropdownLinkColor": "#414142",
	"inputLineHeight": 24,
	"deviceWidth": 1440,
	"deviceHeight": 731,
	"isIphoneX": false,
	"inputGroupRoundedBorderRadius": 30
}