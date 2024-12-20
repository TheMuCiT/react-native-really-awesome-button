import { ButtonTypes } from '../Button';
export declare type ThemedButton = {
    disabled?: boolean;
    index?: number | null;
    flat?: boolean;
    config?: any;
    name?: string | null;
    transparent?: boolean;
    type?: 'primary' | 'secondary' | 'anchor' | 'danger' | 'flat' | 'twitter' | 'facebook' | 'whatsapp' | 'instagram' | 'youtube' | 'linkedin' | 'pinterest' | 'messenger';
    size?: 'small' | 'medium' | 'large' | 'icon';
};
declare function Themed({ disabled, index, config, name, transparent, type, size, ...extra }: ThemedButton & ButtonTypes): JSX.Element;
export default Themed;
//# sourceMappingURL=ThemedButton.d.ts.map