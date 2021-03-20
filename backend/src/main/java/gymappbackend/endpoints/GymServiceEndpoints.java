package gymappbackend.endpoints;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GymServiceEndpoints {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String test() {
        return "Hello world!";
    }


}
