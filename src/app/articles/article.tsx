import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

const Article = () => {
  return (
    <div>
      <Card>
        <Typography variant="h5" sx={{ px: 2, pt: 2 }}>
          Article title will go here
        </Typography>
        <CardHeader
          avatar={
            <Avatar
              src={"https://avatars.githubusercontent.com/u/81088003"}
              aria-label="author"
            />
          }
          title={"Samdish"}
          subheader={new Date().toLocaleString()}
        />
        <CardContent>
          Ocer termes cupio. Atavus pel volo tego tot desparatus adhuc nemo
          supplanto. Vinco expedita tamquam tumultus. Tergiversatio convoco
          voluptas. Valens currus benigne adduco tricesimus allatus hic. Vulnus
          bellum clamo cibus triumphus communis comparo culpo. Temporibus color
          tantum tepesco possimus verecundia uredo benigne quam conatus.
          Solitudo coniuratio vereor tumultus. Contigo tredecim torqueo adnuo
          confugo creptio ventito.
        </CardContent>
      </Card>
    </div>
  );
};

export default Article;
