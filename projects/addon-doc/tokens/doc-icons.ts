import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiDocIcons {
    readonly code: string;
    readonly light: string;
    readonly menu: string;
    readonly dark: string;
    readonly search: string;
    readonly copy: string;
    readonly check: string;
    readonly link: string;
    readonly languages: string;
}

export const TUI_DOC_DEFAULT_ICONS: TuiDocIcons = {
    search: '@tui.search',
    light: '@tui.sun',
    dark: '@tui.moon',
    code: '@tui.code',
    menu: '@tui.menu',
    copy: '@tui.copy',
    check: '@tui.check',
    link: '@tui.link',
    languages: '@tui.languages',
};

export const TUI_DOC_ICONS = tuiCreateToken(TUI_DOC_DEFAULT_ICONS);

export function tuiDocIconsProvider(icons: Partial<TuiDocIcons>): Provider {
    return tuiProvideOptions(TUI_DOC_ICONS, icons, TUI_DOC_DEFAULT_ICONS);
}
