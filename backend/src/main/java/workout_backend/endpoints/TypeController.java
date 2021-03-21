package workout_backend.endpoints;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import workout_backend.models.Type;
import workout_backend.service.TypeService;

import java.util.List;

@RestController
public class TypeController {
    @Autowired
    TypeService typeService;


    @RequestMapping(value = "/types")
    public List<Type> getTypes() {
        return typeService.findAll();
    }
}
