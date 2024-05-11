import { styled } from "@mui/material";
import { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";
import "./Calc.css";

const Calc = () => {
  const [anoNascimento, setAnoNascimento] = useState<number | string>("");
  const [anoAtual, setAnoAtual] = useState<number | string>("");
  const [quantidadeDeAnos, setQuantidade] = useState<number | string>("");

  const Calcular = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const minimumAge = 65;
    const calculation = parseInt(anoAtual as string) - parseInt(anoNascimento as string);
    const media = minimumAge - calculation;
    if (media < minimumAge) {
      setQuantidade(media.toString());
    }
  };

  const StyledCalcContainer = styled(Grid)(({ }) => ({
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  const StyledCalc = styled("div")(() => ({}));

  return (
    <StyledCalcContainer container className="container">
      <Grid item>
        <StyledCalc>
          <form onSubmit={Calcular}>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <TextField type="text" className="birth_yearh" 
                  label="Insert Your Birth Year"
                  color="secondary"
                  focused
                  value={anoNascimento}
                  onChange={(e) => setAnoNascimento(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField className="actual_year"
                  label="Insert Current Year"
                  color="secondary"
                  focused
                  value={anoAtual}
                  onChange={(e) => setAnoAtual(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%" }} 
                  className="btn"
                  color="secondary"
                >
                  Submit
                </Button>
              </Grid>
              <Grid item>
                <TextField
                  label="Years to Retirement"
                  color="secondary"
                  focused
                  value={quantidadeDeAnos}
                  aria-readonly
                />
              </Grid>
            </Grid>
          </form>
        </StyledCalc>
      </Grid>
    </StyledCalcContainer>
  );
};

export default Calc;
