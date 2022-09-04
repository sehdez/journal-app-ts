import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent={'space-between'} alignItems='center' sx={{ mb:1 }} >
            <Grid item>
                <Typography fontSize={ 30 } fontWeight='light' > 04 de Agosto del 2022 </Typography>
            </Grid>
            <Grid item>
                <Button color='primary'>
                    <SaveOutlined sx={{ fontSize: 30, mr:1  }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label='Título'
                    sx={{ border:'none', mb:1 }}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué estás pensando?"
                    minRows={ 5 }
                    sx={{ border:'none', mb:1 }}
                />

                {/* Image gallery */}
                <ImageGallery />

            </Grid>

        </Grid>
    )
}
