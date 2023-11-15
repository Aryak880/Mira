import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Typography,
} from "@mui/material";
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Step1 = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const [formData, setFormData] = useState({
    image: null,
    textField1: "",
    textField2: "",
    dayOfWeek: "",
    startTime: "",
    endTime: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        About
      </Typography>
      <Grid container spacing={2}>
        {/* Row 1 */}
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel htmlFor="image">Image</InputLabel>
            <input
              type="file"
              accept="image/*"
              id="image"
              onChange={handleFileChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography>
            Add short 2 line description about your coaching class
          </Typography>
          <TextField
            fullWidth
            placeholder="Decribe here"
            value={formData.textField1}
            onChange={handleInputChange("textField1")}
          />
        </Grid>
        {/* Row 2 */}
        <Grid item xs={12}>
          <Typography>
            Add detailed description about your coaching class
          </Typography>
          <TextField
            fullWidth
            placeholder="Decribe here"
            value={formData.textField2}
            onChange={handleInputChange("textField2")}
          />
        </Grid>
        {/* Row 3 */}
        <Grid item xs={12} sm={6}>
          {/* <FormControl fullWidth>
            <InputLabel htmlFor="dayOfWeek">Day of Week</InputLabel>
            <Select
              value={formData.dayOfWeek}
              onChange={handleInputChange("dayOfWeek")}
              inputProps={{
                name: "dayOfWeek",
                id: "dayOfWeek",
              }}
            >
              <MenuItem value="Monday">Monday</MenuItem>
              <MenuItem value="Tuesday">Tuesday</MenuItem>
              <MenuItem value="Wednesday">Wednesday</MenuItem>
              <MenuItem value="Thursday">Thursday</MenuItem>
              <MenuItem value="Friday">Friday</MenuItem>
              <MenuItem value="Saturday">Saturday</MenuItem>
              <MenuItem value="Sunday">Sunday</MenuItem>
            </Select>
          </FormControl> */}
          <ButtonGroup>
            {daysOfWeek.map((day) => (
              <Checkbox
                key={day}
                checked={selectedDays.includes(day)}
                onChange={() => toggleDay(day)}
                inputProps={{ "aria-label": day }}
                style={{ display: "none" }} // Hide the actual checkbox input
              />
            ))}
            {daysOfWeek.map((day) => (
              <Button
                key={day}
                variant={selectedDays.includes(day) ? "contained" : "outlined"}
                onClick={() => toggleDay(day)}
              >
                {day}
              </Button>
            ))}
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Start Time"
                type="time"
                value={formData.startTime}
                onChange={handleInputChange("startTime")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="End Time"
                type="time"
                value={formData.endTime}
                onChange={handleInputChange("endTime")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Add additional styling or spacing as needed */}
      {/* <Box mt={2}>
        <Button variant="contained" color="primary">
          Next
        </Button>
      </Box> */}
    </Container>
  );
};

export default Step1;
