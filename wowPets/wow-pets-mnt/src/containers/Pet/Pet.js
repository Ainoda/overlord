import React from "react";
import { Grid } from "material-ui";

import { RegularCard,Table,ItemGrid } from "../../components";

function Pet({ ...props }) {
  function getTableData(){
    return [
      ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
      ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
      ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
      ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
      ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
      ["Mason Porter", "Chile", "Gloucester", "$78,615"]
    ];
  }
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="宠物列表"
          cardSubtitle=""
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["名称", "编码", "类型", "获取方式", "技能1", "技能2", "技能3", "技能4", "技能5", "技能6"]}
              tableData={ getTableData() }
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

export default Pet;
