declare type DynamicStyles = {
    backgroundActive?: string;
    backgroundColor?: string;
    backgroundDarker?: string;
    backgroundPlaceholder?: string;
    backgroundProgress?: string;
    backgroundShadow?: string;
    borderColor?: string;
    borderRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderWidth?: number;
    height: number;
    paddingHorizontal: number;
    paddingTop: number;
    paddingBottom: number;
    raiseLevel: number;
    stretch?: boolean;
    textFontFamily?: string;
    textColor?: string;
    textLineHeight?: number;
    textSize?: number;
    width?: number | null;
    stateWidth?: number | null;
};
export declare const getStyles: ({ backgroundActive, backgroundColor, backgroundDarker, backgroundPlaceholder, backgroundProgress, backgroundShadow, borderColor, borderRadius, borderBottomLeftRadius, borderBottomRightRadius, borderTopLeftRadius, borderTopRightRadius, borderWidth, height, paddingBottom, paddingHorizontal, paddingTop, raiseLevel, stateWidth, stretch, textColor, textFontFamily, textLineHeight, textSize, width, }: DynamicStyles) => {
    container: {
        height: number;
        width: string | number | null;
    };
    container__text: {
        color: string | undefined;
        fontSize: number | undefined;
        fontFamily: string | undefined;
    };
    container__placeholder: {
        height: number | undefined;
        backgroundColor: string | undefined;
    };
    container__view: {
        paddingBottom: number;
        paddingTop: number;
        paddingHorizontal: number;
    };
    shadow: any;
    bottom: any;
    progress: {
        backgroundColor: string | undefined;
        width: string | number | null;
        height: number;
    };
    content: any;
    activeBackground: {
        backgroundColor: string | undefined;
        width: string | number | null;
        height: number;
    };
    text: any;
};
export declare const styles: {
    container: {
        backgroundColor: string;
        zIndex: number;
    };
    container__text: {
        fontWeight: "bold";
        zIndex: number;
        textAlign: "center";
    };
    container__view: {
        flexDirection: "row";
        flex: number;
        alignItems: "center";
        justifyContent: "center";
    };
    container__placeholder: {
        width: string;
        overflow: "hidden";
    };
    container__placeholder__bar: {
        backgroundColor: string;
        width: string;
    };
    container__activity: {
        position: "absolute";
        zIndex: number;
    };
    shadow: {
        width: string;
        position: "absolute";
        left: string;
    };
    bottom: {
        position: "absolute";
        bottom: number;
        left: number;
    };
    progress: {
        zIndex: number;
        position: "absolute";
        top: number;
        left: number;
    };
    content: {
        position: "absolute";
        top: number;
        left: number;
    };
    activeBackground: {
        position: "absolute";
        top: number;
        left: number;
    };
    text: {
        flex: number;
        alignItems: "center";
        justifyContent: "center";
        zIndex: number;
        overflow: "hidden";
    };
};
export {};
//# sourceMappingURL=styles.d.ts.map