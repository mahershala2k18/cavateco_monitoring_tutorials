import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Tutorial_01 = () => {
  return (
    <Box
      className={"App-header"}
      // sx={{
      //   position: "static",
      //   margin: "30px",
      //   width: "896px",
      //   height: "480px",
      //   zIndex: "auto",
      // }}
    >
      <Box>
        <Box>
          <Typography variant="h6">Tutorial Filtrar Equipas</Typography>
        </Box>
        <video width="750" height="500" controls>
          <source
            src="https://primaterra.terrafirma.co.mz:444/support_videos/cavateco_monitoring_equipas.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
      <Box>
        <Box>
          <Typography variant="h6">Tutorial Fitrar Por datas</Typography>
        </Box>
        <video width="750" height="500" controls>
          <source
            src="https://primaterra.terrafirma.co.mz:444/support_videos/monitoring_encontros_date_filtering.mp4"
            type="video/mp4"
          />
        </video>
        {/* <Typography variant="caption">
          Este tutorial ilustra como usar os filtros para obter dados segundo as
          nossas escolhas de pesquisa.
        </Typography> */}
      </Box>
      <Box>
        <Box>
          <Typography variant="h6">
            Tutorial Uso de multiplos Filtros
          </Typography>
        </Box>
        <video width="750" height="500" controls>
          <source
            src="https://primaterra.terrafirma.co.mz:444/support_videos/monitoring_encontros_multiple_filtering.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
    </Box>
  );
};

export default Tutorial_01;
