import color from "color";

import { Platform, Dimensions, PixelRatio } from "react-native";
import { Warna } from '../../Warna';
import { Fonts } from '../../Fonts';

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = "material";
const isIphoneX =
  platform === "ios" && (deviceHeight === 812 || deviceWidth === 812);

export default {
  platformStyle,
  platform,

  //Accordion
  headerStyle: Warna.BackgroundHeader,
  iconStyle: Warna.Dark,
  contentStyle: Warna.Text,
  expandedIconStyle: Warna.Dark,
  accordionBorderColor: Warna.Border,

  // Android
  androidRipple: true,
  androidRippleColor: Warna.Ripple,
  androidRippleColorDark: Warna.RippleDark,
  btnUppercaseAndroidText: true,

  // Badge
  badgeBg: Warna.BackgroundActive,
  badgeColor: Warna.TextInverse,
  badgePadding: 0,

  // Button
  btnFontFamily: Fonts.Button,
  btnDisabledBg: Warna.BackgroundDisable,
  buttonPadding: 6,
  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: Warna.BackgroundBox,
  cardBorderColor: Warna.Border,
  cardBorderRadius: 2,
  cardItemPadding: platform === "ios" ? 10 : 12,

  // CheckBox
  CheckboxRadius: 0,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: 5,
  CheckboxIconSize: 16,
  CheckboxIconMarginTop: 1,
  CheckboxFontSize: 17,
  checkboxBgColor: Warna.BackgroundActive,
  checkboxSize: 20,
  checkboxTickColor: "#fff",

  // Color
  brandPrimary: Warna.Primary,
  brandInfo: Warna.Info,
  brandSuccess: Warna.Success,
  brandDanger: Warna.Danger,
  brandWarning: Warna.Warning,
  brandDark: Warna.Dark,
  brandLight: Warna.Light,

  //Container
  containerBgColor: Warna.Background,

  //Date Picker
  datePickerTextColor: Warna.Text,
  datePickerBg: "transparent",

  // Font
  DefaultFontSize: 16,
  fontFamily: Fonts.Primary,
  fontSizeBase: 15,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: 55,
  footerDefaultBg: Warna.Primary,
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: Warna.Text,
  tabBarTextSize: 11,
  activeTab: Warna.BackgroundActive,
  sTabBarActiveTextColor: Warna.TextActive,
  tabBarActiveTextColor: Warna.TextInverse,
  tabActiveBgColor: Warna.Primary,

  // Header
  toolbarBtnColor: Warna.Light,
  toolbarDefaultBg: Warna.Primary,
  toolbarHeight: 56,
  toolbarSearchIconSize: 23,
  toolbarInputColor: Warna.TextInverse,
  searchBarHeight: platform === "ios" ? 30 : 40,
  searchBarInputHeight: platform === "ios" ? 40 : 50,
  toolbarBtnTextColor: Warna.TextInverse,
  toolbarDefaultBorder: Warna.Primary,
  iosStatusbar: "light-content",
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: "MaterialCommunityIcons",
  iconFontSize: 28,
  iconHeaderSize: 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: Warna.Border,
  inputSuccessBorderColor: Warna.BorderSuccess,
  inputErrorBorderColor: Warna.BorderError,
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return Warna.Placeholder;
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: 24,

  // List
  listBg: "transparent",
  listBorderColor: Warna.Border,
  listDividerBg: Warna.BackgroundDivider,
  listBtnUnderlayColor: Warna.Underlay,
  listItemPadding: 12,
  listNoteColor: Warna.TextNote,
  listNoteSize: 13,
  listItemSelected: Warna.Primary,

  // Progress Bar
  defaultProgressColor: Warna.Spinner,
  inverseProgressColor: Warna.SpinnerInverse,

  // Radio Button
  radioBtnSize: 23,
  radioSelectedColorAndroid: Warna.Primary,
  radioBtnLineHeight: 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: Warna.Primary,
  segmentActiveBackgroundColor: Warna.BackgroundBox,
  segmentTextColor: Warna.TextInverse,
  segmentActiveTextColor: Warna.Primary,
  segmentBorderColor: Warna.Border,
  segmentBorderColorMain: Warna.Primary,

  // Spinner
  defaultSpinnerColor: Warna.Spinner,
  inverseSpinnerColor: Warna.SpinnerInverse,

  // Tab
  tabDefaultBg: Warna.Primary,
  topTabBarTextColor: Warna.Text,
  topTabBarActiveTextColor: Warna.TextInverse,
  topTabBarBorderColor: Warna.Border,
  topTabBarActiveBorderColor: Warna.BorderActive,

  // Tabs
  tabBgColor: Warna.BackgroundBox,
  tabFontSize: 15,

  // Text
  textColor: Warna.Text,
  inverseTextColor: Warna.TextInverse,
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: Fonts.Title,
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: Warna.TextInverse,
  titleFontColor: Warna.TextInverse,

  // Other
  borderRadiusBase: 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: Warna.Dropdown,
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  //iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21
    }
  }
};
