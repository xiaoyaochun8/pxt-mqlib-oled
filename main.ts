/**
* 保留基础函数（画布、pixel/hex模式、橡皮擦）
*/

/**
 * mqOled blocks
 */
//% groups=['oled-使用画布画图']
namespace mqlib {
    /**
     * Create a 128x64 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% group='oled-使用画布画图'
    //% weight=100
    //% imageLiteral=1
    //% imageLiteralColumns=128
    //% imageLiteralRows=64
    //% imageLiteralScale=1
    //% shim=images::createImage
    export function oledCharacterPixels12864(i: string): Image {
        return <Image><any>i;
    }
    /**
     * Create a 128x64 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% group='oled-使用画布画图'
    //% weight=99
    export function oledDrawImgWithPixels12864(im: Image): void {
        for (let y = 0; y < 64; y++) {
            for (let x = 0; x < 128; x++) {
                if (im.pixel(x, y)) {
                    OLED12864_I2C.setPixelData(x, y, 1)
                }
            }
        }
        OLED12864_I2C.draw()
    }
    //% subcategory="oled"
    //% group='oled-橡皮檫'
    //% weight=98
    //% block="oled矩形区域橡皮檫 在位置x $xStart, y $yStart, 宽度 $width 高度 $height 颜色 $color"
    export function oledDrawRectAreaClean(xStart: number, yStart: number, width: number, height: number, color: number = 0): void {
        OLED12864_I2C.clearRectArea(xStart, yStart, width, height, color)
        OLED12864_I2C.draw()
    }
}
