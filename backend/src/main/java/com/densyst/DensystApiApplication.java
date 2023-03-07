package com.densyst;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.envers.repository.support.EnversRevisionRepositoryFactoryBean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication(scanBasePackages = {"com.densyst"}, exclude = { SecurityAutoConfiguration.class } )
@EnableJpaRepositories( basePackages = "com.densyst.repo", repositoryFactoryBeanClass = EnversRevisionRepositoryFactoryBean.class )
@EnableTransactionManagement
@EntityScan("com.densyst.models")
public class DensystApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(DensystApiApplication.class, args);
	}

}
