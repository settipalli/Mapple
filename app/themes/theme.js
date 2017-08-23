import { Platform } from 'react-native';
import Color from 'color';

module.exports = {

    // Badge
    badgeBg: "#ED1727",
    badgeColor: "#fff",

    subtitleColor: '#8e8e93',

    inverseTextColor: "#000",
    textColor: "#fff",

    // Font
    fontFamily: (Platform.OS === 'ios') ? 'HelveticaNeue' : 'Roboto',
    fontSizeBase: 15,
    titleFontSize: (Platform.OS === 'ios') ? 17 : 19,
    subTitleFontSize: (Platform.OS === 'ios') ? 12 : 14,

    get fontSizeH1() {
        return this.fontSizeBase * 1.8;
    },
    get fontSizeH2() {
        return this.fontSizeBase * 1.6;
    },
    get fontSizeH3() {
        return this.fontSizeBase * 1.4;
    },

    // Card
    cardDefaultBg: '#fff',

    // Icon
    iconFamily: 'MaterialIcons',
    iconFontSize: (Platform.OS === 'ios') ? 30 : 28,
    iconMargin: 7,

    // Button
    btnDisabledBg: '#b5b5b5',
    btnDisabledClr: '#f1f1f1',
    buttonPadding: 6,
    btnFontFamily: (Platform.OS === 'ios') ? 'HelveticaNeue' : 'Roboto_medium',

    get btnTextSize() {
        return (Platform.OS === 'ios') ? this.fontSizeBase * 1.1 :
            this.fontSizeBase - 1;
    },
    get btnTextSizeLarge() {
        return this.fontSizeBase * 1.5;
    },
    get btnTextSizeSmall() {
        return this.fontSizeBase * .8;
    },
    get iconSizeLarge() {
        return this.iconFontSize * 1.5;
    },
    get iconSizeSmall() {
        return this.iconFontSize * .6;
    },

    // Border
    borderRadiusBase: (Platform.OS === 'ios') ? 5 : 2,
    borderWidth: 1,

    get borderRadiusLarge() {
        return this.fontSizeBase * 3.8;
    },

    // Checkbox
    checkboxBgColor: '#039BE5',
    checkboxSize: 23,
    checkboxTickColor: '#fff',

    // Radio Button
    radioBtnSize: (Platform.OS === 'ios') ? 25 : 23,
    radioColor: '#7e7e7e',
    get radioSelectedColor() {
        return Color(this.radioColor).darken(0.2).hexString();
    },


    // Tabs
    tabBgColor: "#00c497",
    tabFontSize: 15,
    tabTextColor: "#fff",

    get darkenHeader() {
        return Color(this.tabBgColor).darken(0.03).hexString();
    },

    get statusBarColor() {
        return Color(this.toolbarDefaultBg).darken(0.1).hexString();
    },

    // Color
    brandSidebar: "#252A30",
    brandPrimary: "#428bca",
    get btnPrimaryBg() {
        return this.brandPrimary;
    },
    get btnPrimaryColor() {
        return this.inverseTextColor;
    },

    brandInfo: "#5bc0de",

    get btnInfoBg() {
        return this.brandInfo;
    },
    get btnInfoColor() {
        return this.inverseTextColor;
    },

    brandSuccess: "#5cb85c",

    get btnSuccessBg() {
        return this.brandSuccess;
    },
    get btnSuccessColor() {
        return this.inverseTextColor;
    },

    brandDanger: "#d9534f",

    get btnDangerBg() {
        return this.brandDanger;
    },
    get btnDangerColor() {
        return this.inverseTextColor;
    },

    brandWarning: "#f0ad4e",

    get btnWarningBg() {
        return this.brandWarning;
    },
    get btnWarningColor() {
        return this.inverseTextColor;
    },

    get inputColor() {
        return this.textColor;
    },

    get inputColorPlaceholder() {
        return 'rgba(255, 255, 255, 1.0)';
    },

    // InputGroup
    inputFontSize: 15,
    inputLineHeight: 18,
    inputBorderColor: "#fff",
    inputSuccessBorderColor: '#2b8339',
    inputErrorBorderColor: '#ed2f2f',
    inputHeightBase: 40,
    inputGroupMarginBottom: 10,
    inputPaddingLeft: 5,
    
    get inputPaddingLeftIcon() {
        return this.inputPaddingLeft * 8;
    },

    // Other
    dropdownBg: "#000",
    dropdownLinkColor: "#414142",
    jumbotronPadding: 30,
    jumbotronBg: "#C9C9CE",
    contentPadding: 10,    

    // List
    listBorderColor: "rgba(181, 181, 181, 0.34)",
    listDividerBg: "#f2f2f2",
    listItemPadding: 15,
    listNoteColor: "#bababa",
    listNoteSize: 13,
    listBg: "#fff",

    // Line Height
    lineHeight: (Platform.OS === 'ios') ? 21 : 25,
    iconLineHeight: (Platform.OS === 'ios') ? 37 : 30,
    btnLineHeight: 19,

    // Header
    toolbarIconSize: (Platform.OS === 'ios') ? 20 : 22,
    toolbarInputColor: '#CECDD2',
    toolbarHeight: (Platform.OS === 'ios') ? 64 : 56,
    toolbarDefaultBg: "#322A2A",
    toolbarInverseBg: "#222",
    iosToolbarBtnColor: '#fff',
    toolbarTextColor: '#fff',

    // Spinner
    defaultSpinnerColor: "#45D56E",
    inverseSpinnerColor: "#1A191B",

    // Progress Bar
    defaultProgressColor: "#E4202D",
    inverseProgressColor: "#1A191B",

    //Tab
    tabDefaultBg: (Platform.OS === 'ios') ? '#F8F8F8' : '#4179F7',
    topTabBarTextColor: (Platform.OS === 'ios') ? '#6b6b6b' : '#b3c7f9',
    topTabBarActiveTextColor: (Platform.OS === 'ios') ? '#007aff' : '#fff',
    topTabActiveBgColor: (Platform.OS == 'ios') ? '#cde1f9' : undefined,
    topTabBarBorderColor: (Platform.OS === 'ios') ? '#007aff' : '#fff',

    // Footer
    footerHeight: 55,
    footerDefaultBg: (Platform.OS === 'ios') ? '#F8F8F8' : '#4179F7',

    //FooterTab
    tabBarTextColor: (Platform.OS === 'ios') ? '#6b6b6b' : '#b3c7f9',
    tabBarActiveTextColor: (Platform.OS === 'ios') ? '#007aff' : '#fff',
    tabActiveBgColor: (Platform.OS == 'ios') ? '#cde1f9' : undefined

}
