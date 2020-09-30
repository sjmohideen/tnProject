// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {TreeTableModule} from 'primeng/treetable';
// import {CheckboxModule} from 'primeng/checkbox';

// @NgModule({
//   declarations: [],
//   imports: [
//     TreeTableModule,
//     CheckboxModule
//   ],
//   exports: [
//     TreeTableModule,
//     CheckboxModule
//   ],
 
// })
// export class PrimeModule { }
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import {TreeTableModule} from 'primeng/treetable';
/* panel */
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
/* buttom */
import { ButtonModule } from 'primeng/button';
/* input */
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
/* data */
import { CarouselModule } from 'primeng/carousel';
/* chart */
// import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ColorPickerModule } from 'primeng/colorpicker';
/* overlay */
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';

import { DataViewModule } from 'primeng/dataview';
import { DeferModule } from 'primeng/defer';
import { DialogModule } from 'primeng/dialog';
/* drag , deop */
import { DragDropModule } from 'primeng/dragdrop';
// import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
/* file*/
import { FileUploadModule } from 'primeng/fileupload';
/* multimedia */
import { GalleriaModule } from 'primeng/galleria';

import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
/* menu */
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
/* messages */
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MessageService} from 'primeng/api';
@NgModule({
    imports: [CommonModule],
    exports: [
        TableModule,
        CalendarModule,
        ChipsModule,
        InputTextModule,
        ListboxModule,
        MultiSelectModule,
        RadioButtonModule,
        SliderModule,
        SelectButtonModule,
        TriStateCheckboxModule,
        AutoCompleteModule,
        CheckboxModule,
        ColorPickerModule,
        // EditorModule,
        InputSwitchModule,
        InputTextareaModule,
        PasswordModule,
        RatingModule,
        SpinnerModule,
        ToggleButtonModule,
        ButtonModule,
        SplitButtonModule,
        CarouselModule,
       
        OrganizationChartModule,
        PickListModule,
       
        TreeTableModule,
        
        DataViewModule,
        OrderListModule,
        PaginatorModule,
        
        TreeModule,
        AccordionModule,
        FieldsetModule,
        ScrollPanelModule,
        TabViewModule,
        CardModule,
        PanelModule,
        ToolbarModule,
        ConfirmDialogModule,
        LightboxModule,
        OverlayPanelModule,
        DialogModule,
        SidebarModule,
        TooltipModule,
        FileUploadModule,
        MenuModule,
        ContextMenuModule,
        PanelMenuModule,
        StepsModule,
        TieredMenuModule,
        BreadcrumbModule,
        MegaMenuModule,
        MenubarModule,
        SlideMenuModule,
        TabMenuModule,
        // ChartModule,
        MessagesModule,
        MessageModule,
       
        GalleriaModule,
        DragDropModule,
        ProgressBarModule,
        CodeHighlighterModule,
        ProgressSpinnerModule,
        DeferModule,
        KeyFilterModule,
        ToastModule
    ],
    providers:[MessageService]
})
export class PrimeNgModule { }

