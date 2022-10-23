import { GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";

export const PasswordCell: React.FunctionComponent<GridRenderCellParams> = (params) => {
    var text = params.value.replaceAll(/./gm, '*')
    return <div>
            {text}
    </div>
}