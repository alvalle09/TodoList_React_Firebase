import React from "react";
import { ListItemText, List, ListItem, ListItemAvatar, Avatar } from "@material-ui/core";

function Todo(props) {
  return (
    <div>
      <List>
        <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
          <ListItemText primary={props.text} secondary="Deadline: ' 🕰"></ListItemText>
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
