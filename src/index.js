/**
 * @callback useMagicalTheme
 * @param {boolean} isDarkMode
 * @returns {{dark:"#0d0d0d",light:"#ebf3fa", background: "#080808" | "#dde4eb",depthColor: "#0d0d0d" | "#ebf3fa",depthColorTwo: "#191919" | "#f4faff",depthColorThree: "#262626" | "#ffffff",color: "#f8f9fa" | "#212529",colorTwo: "#bdbdbd" | "#56595c",colorThree: "#525252" | "#7e8183",brandColor: "#6741d9" | "#7920FF",brandColorHover: "#7e5edf" | "#8d41ff",brandColorActive: "#752be6" | "#7837d9",brandColorDisable: "#392477" | "#43128c",brandColorTwo: "#14c0c0" | "#19F0F0",brandColorTwoHover: "#5bd3d3" | "#18e4e4",brandColorTwoActive: "#4db3b3" | "#14c2c2",brandColorTwoDisable: "#0b6a6a" | "#0e8484",assistantBrandColor: "#FFB647" | "#FFB647",assistantBrandColorHover: "#ffc163" | "#f4b95f",assistantBrandColorActive: "#f2b75e" | "#e8b05a",assistantBrandColorDisable: "#8c6427" | "#855f25"}}
 */
/**@type {useMagicalTheme} */
export const useMagicalTheme = ( isDarkMode ) =>
{
    return {
        background: isDarkMode ? "#080808" : "#dde4eb",
        depthColor: isDarkMode ? "#0d0d0d" : "#ebf3fa",
        depthColorTwo: isDarkMode ? "#191919" : "#f4faff",
        depthColorThree: isDarkMode ? "#262626" : "#ffffff",
        light: "#ebf3fa",
        dark: "#0d0d0d",
        color: isDarkMode ? "#f8f9fa" : "#212529",
        colorTwo: isDarkMode ? "#bdbdbd" : "#56595c",
        colorThree: isDarkMode ? "#525252" : "#7e8183",
        brandColor: isDarkMode ? "#6741d9" : "#7920FF",
        brandColorHover: isDarkMode ? "#7e5edf" : "#8d41ff",
        brandColorActive: isDarkMode ? "#752be6" : "#7837d9",
        brandColorDisable: isDarkMode ? "#392477" : "#43128c",
        brandColorTwo: isDarkMode ? "#14c0c0" : "#19F0F0",
        brandColorTwoHover: isDarkMode ? "#5bd3d3" : "#18e4e4",
        brandColorTwoActive: isDarkMode ? "#4db3b3" : "#14c2c2",
        brandColorTwoDisable: isDarkMode ? "#0b6a6a" : "#0e8484",
        assistantBrandColor: isDarkMode ? "#FFB647" : "#FFB647",
        assistantBrandColorHover: isDarkMode ? "#ffc163" : "#f4b95f",
        assistantBrandColorActive: isDarkMode ? "#f2b75e" : "#e8b05a",
        assistantBrandColorDisable: isDarkMode ? "#8c6427" : "#855f25"
    };
};