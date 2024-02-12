import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

type ArticleDetailsPageProps = {
  params: { id: string };
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  return (
    <Box component={Paper} elevation={3} p={3}>
      <Typography variant="h3" component="h1">
        Appositus congregatio conforto minima comes usus aer.
      </Typography>
      <Box
        component={CardHeader}
        px={0}
        avatar={
          <Avatar
            id={props.params.id}
            src={"https://avatars.githubusercontent.com/u/92872703"}
            aria-label="author"
          />
        }
        title={"Dr. Pym Hanks"}
        subheader={`Published ${new Date().toLocaleString()}`}
      />
      <Typography>
        Aggredior demoror utrum caries tempus terra a quisquam sollers corpus.
        Bellum supellex damnatio thalassinus vero templum adicio surgo delego
        arbitro. Corrupti sopor ceno abscido ulterius communis benevolentia
        supra vulgaris triumphus. Valens ago aiunt adulescens casus defaeco vivo
        aegrus exercitationem. Cupiditate nisi ultio cresco demens paens. Sopor
        sperno suspendo approbo stillicidium amiculum. Supra adficio artificiose
        terebro caecus uter cruentus. Bellum approbo vomito. Claustrum concido
        cedo placeat. Aggredior demoror utrum caries tempus terra a quisquam
        sollers corpus. Bellum supellex damnatio thalassinus vero templum adicio
        surgo delego arbitro. Corrupti sopor ceno abscido ulterius communis
        benevolentia supra vulgaris triumphus. Valens ago aiunt adulescens casus
        defaeco vivo aegrus exercitationem. Cupiditate nisi ultio cresco demens
        paens. Sopor sperno suspendo approbo stillicidium amiculum. Supra
        adficio artificiose terebro caecus uter cruentus. Bellum approbo vomito.
        Claustrum concido cedo placeat.
      </Typography>
    </Box>
  );
};

export default ArticleDetailsPage;
