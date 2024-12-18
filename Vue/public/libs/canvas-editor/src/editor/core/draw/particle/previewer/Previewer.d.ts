import { IElement, IElementPosition } from '../../../../interface/Element';
import { IPreviewerDrawOption } from '../../../../interface/Previewer';
import { Draw } from '../../Draw';
export declare class Previewer {
    private container;
    private canvas;
    private draw;
    private options;
    private curElement;
    private curElementSrc;
    private previewerDrawOption;
    private curPosition;
    private resizerSelection;
    private resizerHandleList;
    private resizerImageContainer;
    private resizerImage;
    private width;
    private height;
    private mousedownX;
    private mousedownY;
    private curHandleIndex;
    private previewerContainer;
    private previewerImage;
    constructor(draw: Draw);
    private _createResizerDom;
    private _keydown;
    private _mousedown;
    private _mousemove;
    private _dblclick;
    private _drawPreviewer;
    _setPreviewerTransform(scale: number, rotate: number, x: number, y: number): void;
    private _clearPreviewer;
    drawResizer(element: IElement, position: IElementPosition, options?: IPreviewerDrawOption): void;
    clearResizer(): void;
}
