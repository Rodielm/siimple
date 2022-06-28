// Default code for playground
export const defaultHtml = `
<div class="is-flex has-direction-column has-items-center has-justify-center has-s-full has-minh-96">
    <div class="has-s-32 has-bg-gray-800 has-radius-full">
        <div class=" has-s-full is-flex has-items-center has-justify-center">
            <i class="si-siimple has-size-8 has-text-white"></i>
        </div>
    </div>
    <div class="has-mt-6 has-size-3 has-maxw-96 has-px-8 has-text-center">
        The <b>minimal</b> and <b>themeable</b> CSS toolkit.
    </div>
    <div class="has-mt-2 has-text-gray-600">
        www.siimple.xyz
    </div>
</div>

`.trim();

// Default configuration for playground
export const defaultConfig = `
// You can import our color palette to create your theme
// import colors from "@siimple/colors";

// You can import presets to extend siimple using reusable styles and themes
import theme from "@siimple/preset-theme";

export default {
    modules: {},
    useBorderBox: true,
    useRootStyles: true,
    ...theme,
    styles: {
        // Include your custom styles
    },
};

`.trim();
